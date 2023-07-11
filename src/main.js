import { createApp } from 'vue'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCaretDown, faMagnifyingGlass, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faCaretDown, faMagnifyingGlass, faUserPlus, faCalendarDays, faPlus)

import App from './App.vue'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
