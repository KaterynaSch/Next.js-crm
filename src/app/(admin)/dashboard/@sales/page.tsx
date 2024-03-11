import DashboardCard from '@/app/components/dashboard-card';
import MagicButton from '@/app/components/magic-button';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-sell';
import { getSummarySales } from '@/app/lib/api';
import React from 'react';

export interface PageProps {
}

export default async function Page({}: PageProps) {
  const data = 
  await getSummarySales();
  // new Promise((res) => {
  //   setTimeout(() => {
  //     res(getSummarySales());
  //   }, 4000);
  // });

  return (
    <DashboardCard
      label={
        <>
          Sales ditails
          <MagicButton />
        </>
      }
    >
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
