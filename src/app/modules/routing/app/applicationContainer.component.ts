import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    template: require('./applicationContainer.template.pug'),
    styles: [
        require('./applicationContainer.style.styl')
    ]
})
class ApplicationContainer {
    constructor(private router: Router){}
}

export { ApplicationContainer }
