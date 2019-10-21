import React from 'react';
import T from 'prop-types';

import { iconsConfig } from '../../icons/iconsConfig';

export const Icon = ({ name, ...props }) => {
    const IconC = iconsConfig[name];
    return <IconC {...props} />;
}

Icon.propTypes = {
    name: T.string.isRequired,
    size: T.string,
    color: T.string,
}

Icon.defaltProps = {
    size: "14px",
    color: "#333333",
}