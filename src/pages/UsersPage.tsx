import React from 'react';
import Layout from "@/components/layout/Layout";
import UsersScreen from "@/components/screens/users/UsersScreen";

const UsersPage = () => {
    return (
        <Layout>
            <div className="container">
                <UsersScreen />
            </div>
        </Layout>
    );
};

export default UsersPage;