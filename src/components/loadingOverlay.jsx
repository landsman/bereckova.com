import React, { useContext } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import Spinner from '~/components/spinner';
import { AppContext } from "~/providers/AppProvider";

const CustomLoadingOverlay = ({ show = true, children }) => {

    const ctx = useContext(AppContext);

    return (
        <LoadingOverlay
            active={ctx.state.loading}
            spinner={<Spinner globalSpinner={true} />}>
            {children}
        </LoadingOverlay>
    );
};

export default CustomLoadingOverlay;