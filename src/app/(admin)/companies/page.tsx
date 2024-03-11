import React from 'react';
import CompanyRow from '../../components/company-row';
import CompanyTable from '../../components/company-table';
import { Status } from '../../components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}
