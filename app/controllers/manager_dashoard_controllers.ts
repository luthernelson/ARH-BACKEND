import { DateTime } from 'luxon'
import type { HttpContext } from '@adonisjs/core/http'
import Employee from '#models/employee'
import Presence from '#models/presence'
import Projet from '#models/projet'
import Client from '#models/client'
import Tache from '#models/tache'
import User from '#models/user'
import Activite from '#models/activite'
import db from '@adonisjs/lucid/services/db'
import Transaction from '#models/transaction'
import Candidat from '#models/candidat'
import Facture from '#models/facture'

export default class ManagerDashboardController {
  async index({ response }: HttpContext) {
    const today = DateTime.local().toISODate()
    const startOfWeek = DateTime.local().startOf('week').toISODate()
    const endOfWeek = DateTime.local().endOf('week').toISODate()

    const startOfPreviousWeek = DateTime.local().minus({ weeks: 1 }).startOf('week').toISODate()
    const endOfPreviousWeek = DateTime.local().minus({ weeks: 1 }).endOf('week').toISODate()

    // Présences (comparaison avec la semaine précédente)
    const totalEmployees = await Employee.query().count('* as total')
    const presentThisWeek = await Presence.query()
      .whereBetween('date', [startOfWeek, endOfWeek])
      .where('status', 'present')
      .count('* as total')

    const presentLastWeek = await Presence.query()
      .whereBetween('date', [startOfPreviousWeek, endOfPreviousWeek])
      .where('status', 'present')
      .count('* as total')
    const presenceChange = this.calcVariation(
      presentThisWeek[0].$extras.total,
      presentLastWeek[0].$extras.total
    )

    // Projets
    const activeProjects = await Projet.query().where('statut', 'actif').count('* as total')
    const activeProjectsLastWeek = await Projet.query()
      .where('statut', 'actif')
      .whereBetween('updated_at', [startOfPreviousWeek, endOfPreviousWeek])
      .count('* as total')
    const totalProjects = await Projet.query().count('* as total')
    const projectChange = this.calcVariation(
      activeProjects[0].$extras.total,
      activeProjectsLastWeek[0].$extras.total
    )

    // Clients
    const activeClients = await Client.query().where('status', 'actif').count('* as total')
    const activeClientsLastWeek = await Client.query()
      .where('status', 'actif')
      .whereBetween('updated_at', [startOfPreviousWeek, endOfPreviousWeek])
      .count('* as total')
    const totalClients = await Client.query().count('* as total')
    const clientChange = this.calcVariation(
      activeClients[0].$extras.total,
      activeClientsLastWeek[0].$extras.total
    )

    // Tâches
    const totalTasks = await Tache.query().count('* as total')
    const completedTasks = await Tache.query().where('status', 'terminee').count('* as total')
    const completedTasksLastWeek = await Tache.query()
      .where('status', 'terminee')
      .whereBetween('updated_at', [startOfPreviousWeek, endOfPreviousWeek])
      .count('* as total')
    const taskChange = this.calcVariation(
      completedTasks[0].$extras.total,
      completedTasksLastWeek[0].$extras.total
    )

    // Gains cette semaine (transactions de type 'revenu')
    const totalGains = await Transaction.query()
      .where('type', 'revenu')
      .whereBetween('date', [startOfWeek, endOfWeek])
      .sum('montant as total')

    const previousGains = await Transaction.query()
      .where('type', 'revenu')
      .whereBetween('date', [startOfPreviousWeek, endOfPreviousWeek])
      .sum('montant as total')

    const gainsChange = this.calcVariation(
      totalGains[0].$extras.total ?? 0,
      previousGains[0].$extras.total ?? 0
    )

    // Bénéfice cette semaine
    const weeklyRevenus = await Transaction.query()
      .where('type', 'revenu')
      .whereBetween('date', [startOfWeek, endOfWeek])
      .sum('montant as total')

    const weeklyDepenses = await Transaction.query()
      .where('type', 'depense')
      .whereBetween('date', [startOfWeek, endOfWeek])
      .sum('montant as total')

    const weeklyBenefit =
      (weeklyRevenus[0].$extras.total ?? 0) - (weeklyDepenses[0].$extras.total ?? 0)

    const previousRevenus = await Transaction.query()
      .where('type', 'revenu')
      .whereBetween('date', [startOfPreviousWeek, endOfPreviousWeek])
      .sum('montant as total')

    const previousDepenses = await Transaction.query()
      .where('type', 'depense')
      .whereBetween('date', [startOfPreviousWeek, endOfPreviousWeek])
      .sum('montant as total')

    const previousBenefit =
      (previousRevenus[0].$extras.total ?? 0) - (previousDepenses[0].$extras.total ?? 0)

    const weeklyBenefitChange = this.calcVariation(weeklyBenefit, previousBenefit)

    // Candidats
    const totalCandidats = await Candidat.query().count('* as total')
    const candidatsLastWeek = await Candidat.query()
      .whereBetween('mis_a_jour_a', [startOfPreviousWeek, endOfPreviousWeek])
      .count('* as total')
    const candidatsChange = this.calcVariation(
      totalCandidats[0].$extras.total,
      candidatsLastWeek[0].$extras.total
    )

    // Recrues (candidats avec statut = hired)
    const recrues = await Candidat.query()
      .where('status', 'hired')
      .whereBetween('mis_a_jour_a', [startOfWeek, endOfWeek])
      .count('* as total')
    const recruesLastWeek = await Candidat.query()
      .where('status', 'hired')
      .whereBetween('cree_a', [startOfPreviousWeek, endOfPreviousWeek])
      .count('* as total')

    const totalRecrutements = await Candidat.query()
      .whereIn('status', ['sheduled', 'recieved', 'interviewed', 'offered', 'hired'])
      .count('* as total')

    const recruesChange = this.calcVariation(
      recrues[0].$extras.total,
      recruesLastWeek[0].$extras.total
    )

    return response.ok({
      presence: {
        value: `${presentThisWeek[0].$extras.total}/${totalEmployees[0].$extras.total}`,
        change: presenceChange,
        isPositive: Number.parseFloat(presenceChange) >= 0,
      },
      projets: {
        value: `${activeProjects[0].$extras.total}/${totalProjects[0].$extras.total}`,
        change: projectChange,
        isPositive: Number.parseFloat(projectChange) >= 0,
      },
      clients: {
        value: `${activeClients[0].$extras.total}/${totalClients[0].$extras.total}`,
        change: clientChange,
        isPositive: Number.parseFloat(clientChange) >= 0,
      },
      taches: {
        value: `${completedTasks[0].$extras.total}/${totalTasks[0].$extras.total}`,
        change: taskChange,
        isPositive: Number.parseFloat(taskChange) >= 0,
      },
      gains: {
        value: `$${totalGains[0].$extras.total}`,
        change: gainsChange,
        isPositive: Number.parseFloat(gainsChange) >= 0,
      },
      benefit: {
        value: `$${weeklyBenefit}`,
        change: weeklyBenefitChange,
        isPositive: Number.parseFloat(weeklyBenefitChange) >= 0,
      },
      candidats: {
        value: `${totalCandidats[0].$extras.total}`,
        change: candidatsChange,
        isPositive: Number.parseFloat(candidatsChange) >= 0,
      },
      recrues: {
        value: `${recrues[0].$extras.total}/${totalRecrutements[0].$extras.total}`,
        change: recruesChange,
        isPositive: Number.parseFloat(recruesChange) >= 0,
      },
    })
  }
  async index2({ response }: HttpContext) {
    const totalEmployees = await Employee.query().count('* as total')
    const total = Number(totalEmployees[0].$extras.total) // $extras contient les alias

    // Statut d'employés
    const fullTime = await Employee.query().where('status', 'full_time').count('* as total')
    const contract = await Employee.query().where('status', 'contract').count('* as total')
    const probation = await Employee.query().where('status', 'probation').count('* as total')
    const wfh = await Employee.query().where('status', 'wfh').count('* as total')

    // Présences du jour
    const today = new Date().toISOString().split('T')[0]
    const totalPresence = await Presence.query().where('date', today).count('* as total')
    const present = await Presence.query()
      .where('status', 'present')
      .where('date', today)
      .count('* as total')
    const late = await Presence.query()
      .where('status', 'late')
      .where('date', today)
      .count('* as total')
    const authorized = await Presence.query()
      .where('status', 'authorized')
      .where('date', today)
      .count('* as total')
    const absent = await Presence.query()
      .where('status', 'absent')
      .where('date', today)
      .count('* as total')

    // Pointage (avec heure d’entrée et de sortie)
    const clockings = await Presence.query()
      .preload('employee')
      .where('date', today)
      .orderBy('clock_in', 'desc')

    // Employé le plus performant
    const topPerformer = await Employee.query().orderBy('performance_score', 'desc').first()

    // Candidats
    const candidates = await Candidat.all()

    // Employés avec leur département
    const employees = await Employee.query().select(['id', 'name', 'department'])

    // Tâches
    const todos = await Tache.query().where('status', 'pending').orderBy('created_at', 'desc')

    return response.ok({
      employeeStats: {
        total: Number(totalEmployees[0].$extras.total),
        fullTime: Number(fullTime[0].$extras.total),
        contract: Number(contract[0].$extras.total),
        probation: Number(probation[0].$extras.total),
        wfh: Number(wfh[0].$extras.total),
      },
      attendanceOverview: {
        total: Number(totalPresence[0].$extras.total),
        present: Number(present[0].$extras.total),
        late: Number(late[0].$extras.total),
        authorized: Number(authorized[0].$extras.total),
        absent: Number(absent[0].$extras.total),
      },
      clockings,
      topPerformer,
      candidates,
      employees,
      todos,
    })
  }
  async employesParDepartement({ response }: HttpContext) {
    const currentWeekStart = DateTime.local().startOf('week').toSQLDate()
    const currentWeekEnd = DateTime.local().endOf('week').toSQLDate()

    const result = await db
      .from('employees')
      .select('departement_id')
      .count('* as total')
      .whereBetween('created_at', [currentWeekStart, currentWeekEnd])
      .groupBy('departement_id')

    // Optionnel : Comparaison avec la semaine précédente
    const previousWeekStart = DateTime.local().minus({ weeks: 1 }).startOf('week').toSQLDate()
    const previousWeekEnd = DateTime.local().minus({ weeks: 1 }).endOf('week').toSQLDate()

    const lastWeekResult = await db
      .from('employees')
      .select('departement_id')
      .count('* as total')
      .whereBetween('created_at', [previousWeekStart, previousWeekEnd])
      .groupBy('departement_id')

    // Comparaison globale (augmentation ou réduction)
    const totalThisWeek = result.reduce((sum, dep) => sum + Number(dep.total), 0)
    const totalLastWeek = lastWeekResult.reduce((sum, dep) => sum + Number(dep.total), 0)
    const differencePercent =
      totalLastWeek === 0
        ? 100
        : Math.round(((totalThisWeek - totalLastWeek) / totalLastWeek) * 100)

    return response.ok({
      labels: result.map((dep) => dep.department),
      data: result.map((dep) => Number(dep.total)),
      change: {
        value: differencePercent,
        increased: differencePercent >= 0,
      },
    })
  }
  async index3({ response }: HttpContext) {
    const now = DateTime.local()

    const candidatsInterview = await Candidat.query()
      .where('status', 'interviewed')
      .orderBy('mis_a_jour_a', 'desc')

    // 2. Activités récentes (par exemple les dernières 5 activités)
    const activites = await Activite.query()
      .orderBy('created_at', 'desc')
      .limit(5)
      .preload('employee') // si une activité est liée à un utilisateur

    // 3. Anniversaires aujourd'hui, demain, etc.
    const today = now.toFormat('MM-dd')
    const tomorrow = now.plus({ days: 1 }).toFormat('MM-dd')

    const anniversaires = {
      aujourdHui: await Employee.query().whereRaw("to_char(date_naissance, 'MM-DD') = ?", [today]),
      demain: await Employee.query().whereRaw("to_char(date_naissance, 'MM-DD') = ?", [tomorrow]),
      cetteSemaine: await Employee.query().whereRaw(
        'EXTRACT(WEEK FROM date_naissance) = EXTRACT(WEEK FROM CURRENT_DATE)'
      ),
    }

    return response.ok({
      candidatsInterview,
      activites,
      anniversaires,
    })
  }
  async index4({ request, response }: HttpContext) {
    const department = request.input('department') || null

    const mois = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    // Filtrer les transactions selon le département
    const revenusQuery = Transaction.query().where('type', 'revenu')
    const depensesQuery = Transaction.query().where('type', 'depense')

    if (department) {
      revenusQuery.where('departement_id', department)
      depensesQuery.where('departement_id', department)
    }

    const revenus = await revenusQuery
    const depenses = await depensesQuery

    // Projets actifs
    const projets = await Projet.query().where('status', 'actifs')

    // Factures récentes
    const factures = await Facture.query()
      .if(department, (query) => query.where('departement_id', department))
      .orderBy('created_at', 'desc')
      .limit(5)

    // Statistiques des tâches
    const totalTaches = await Tache.query().count('* as total')
    const enCours = await Tache.query().where('statut', 'en_cours').count('* as total')
    const enAttente = await Tache.query().where('statut', 'en_attente').count('* as total')
    const enRetard = await Tache.query().where('statut', 'en_retard').count('* as total')
    const termine = await Tache.query().where('statut', 'termine').count('* as total')

    const heuresTotal = await Tache.query().sum('heures as total')
    const heuresPassees = await Tache.query()
      .whereNot('statut', 'en_attente')
      .sum('heures as total')

    return response.ok({
      mois,
      transactions: {
        revenus,
        depenses,
      },
      projets,
      factures,
      tachesStats: {
        total: Number(totalTaches[0].$extras.total),
        enCours: Number(enCours[0].$extras.total),
        enAttente: Number(enAttente[0].$extras.total),
        enRetard: Number(enRetard[0].$extras.total),
        termine: Number(termine[0].$extras.total),
        heuresTotal: Number(heuresTotal[0].$extras.total),
        heuresPassees: Number(heuresPassees[0].$extras.total),
      },
    })
  }

  private calcVariation(current: number, previous: number): string {
    if (!previous || previous === 0) return '0.0'
    const variation = ((current - previous) / previous) * 100
    return variation.toFixed(1)
  }
}
