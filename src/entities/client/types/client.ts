import { User } from '@entities/user';
import { Group } from '@entities/group';
import { CompanyTemplate } from '@shared/lib/api/target/types';
import { Company } from '@entities/company';

export interface Client extends Model {
  name: string;
  balance: number;
  critical_balance: number;
  all_limit: number;
  day_limit: number;
  day_spent: number;
  week_spent: number;
  month_spent: number;
  month_plan: number;
  budget_adjustment: number;
  recommended_budget: number | null;
  zero_days: number;
  is_budget_agreed: boolean | 0 | 1;
  current_invoice_id: number | null;
  token: string;
  has_telegram: boolean;
  paid_at: string | null;
  zero_balance_at: string | null;
  low_balance_at: string | null;

  group_id?: number;
  is_mine?: boolean;

  current_invoice?: Invoice;
  users?: User[];
  group?: Group;
}

export interface Invoice {
  id: number;
  budget: number;
  client_id: number;
  path: string;
  number: string | null;
  inn: string | null;
  customer: string | null;
  description: string | null;
  vk_number: number | null;
  is_paid: boolean;
  is_vk_paid: boolean;
}

export interface GetStatisticProps {
  date_to: AppDate;
  date_from: AppDate;
  metrics?: Metrics[];
  only_field?: string[];
}

type Metrics = 'all' | 'base' | 'events' | 'video' | 'uniques' | 'tps' | 'playable' | 'romi';

export interface GetStatisticByCompaniesProps extends GetStatisticProps {
  company_template_id?: CompanyTemplate['id'];
}

export interface ClientsStatisticResponse {
  items: Statistic[];
  total: Omit<StatisticResponse, 'date'>;
}

export interface Statistic {
  id: Client['id'] | Company['id'];
  rows?: StatisticResponse[];
  total: Partial<BaseStatistic & UniquesStatistic>;
}

export interface StatisticResponse {
  base?: BaseStatistic;
  uniques?: UniquesStatistic;
  date: string;
}

export interface BaseStatistic {
  spent: number;
  shows: number;
  goals: number;
  clicks: number;
  cpc: number;
  cpm: number;
  cpa: number;
  ctr: number;
  cr: number;
}

export type SummeryFields = Pick<BaseStatistic, 'spent' | 'shows' | 'clicks'>;

export interface PeriodStatistic extends SummeryFields {
  date: string;
}

export interface UniquesStatistic {
  reach: number;
  total: number;
  increment: number;
  initial_total: number;
  frequency: number;
}

export type InvoiceUpdatePayload = Partial<Pick<Client, 'recommended_budget' | 'is_budget_agreed'>>;
