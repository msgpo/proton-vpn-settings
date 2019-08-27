import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Input, Alert, PrimaryButton } from 'react-components';

const ValidateResetTokenForm = ({ onSubmit, loading }) => {
    const [token, updateToken] = useState('');

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(token);
            }}
        >
            <Alert>{c('Info')
                .t`We've sent a reset code to your recovery email, valid for one hour or until you request a new code. Enter it below to continue.`}</Alert>
            <Input
                className="w100 mb1"
                value={token}
                onChange={({ target }) => updateToken(target.value)}
                id="resetToken"
                name="resetToken"
                autoFocus
                required
                placeholder={c('Placeholder').t`Reset code`}
            />
            <Alert type="warning">{c('Info')
                .t`IMPORTANT: Do not close or navigate away from this page. You will need to enter the reset code into the field below once you receive it.`}</Alert>
            <div className="mb1">
                <PrimaryButton loading={loading} type="submit">{c('Action').t`Reset password`}</PrimaryButton>
            </div>
        </form>
    );
};

ValidateResetTokenForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

export default ValidateResetTokenForm;
