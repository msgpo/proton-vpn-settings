import React from 'react';
import PropTypes from 'prop-types';
import { StandardPrivateApp } from 'react-components';
import { UserModel, MailSettingsModel, UserSettingsModel } from 'proton-shared/lib/models';

import PrivateLayout from './components/layout/PrivateLayout';
import PrivateAppRoutes from './PrivateAppRoutes';
import UserVPNProvider from './containers/vpn/userVPN/Provider';

const PrivateApp = ({ onLogout }) => {
    return (
        <StandardPrivateApp
            onLogout={onLogout}
            preloadModels={[UserModel, UserSettingsModel]}
            eventModels={[UserModel, MailSettingsModel]}
        >
            <UserVPNProvider>
                <PrivateLayout>
                    <PrivateAppRoutes />
                </PrivateLayout>
            </UserVPNProvider>
        </StandardPrivateApp>
    );
};

PrivateApp.propTypes = {
    onLogout: PropTypes.func.isRequired
};

export default PrivateApp;
