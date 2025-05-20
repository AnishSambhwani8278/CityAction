import React from 'react';
import Layout from '../components/layout/Layout';
import InitiativeList from '../components/initiatives/InitiativeList';

const InitiativesPage: React.FC = () => {
  return (
    <Layout>
      <InitiativeList />
    </Layout>
  );
};

export default InitiativesPage;