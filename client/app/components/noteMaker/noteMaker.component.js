// create our directive here
// import the template, controller, and style
import template from './noteMaker.html';
import {NoteMakerController as controller} from './noteMaker.controller';

let noteMakerComponent = () => {
    return {
        restrict: 'E',
        template,
        controller,
        controllerAs: 'vm',
    };
};

export {noteMakerComponent};
