import cockpit from 'cockpit';
import React from 'react';

const _ = cockpit.gettext;

export class Application extends React.Component {
    constructor() {
        super();
        this.state = { hostname: _("Unknown") };
    }
}
