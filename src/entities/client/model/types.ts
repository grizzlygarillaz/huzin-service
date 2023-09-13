export interface IClient extends Model {
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
  entrepreneur: string;
  paid_at: string | null;
  zero_balance_at: string | null;
  low_balance_at: string | null;
  basic_payment?: number;
  group_id?: number;
  is_mine?: boolean;
}

export interface IStatsReq {
  id: number;
  period: 'day' | 'week' | 'month' | 'year';
  date_from: string;
  date_to: string;
}

export interface IStatsResp {
  clicks: number;
  ctr: number;
  day_from: string;
  day_to: string;
  month: string;
  period_date: string;
  effective_cost_per_click: number;
  effective_cost_per_mille: number;
  impressions: number;
  reach: number;
  join_rate: number;
  spent: number;
}

export interface IClientStatsResp {
  id: IClient['id'];
  stats: IStatsResp[];
  type: 'ad' | 'campaign' | 'client' | 'office';
}
