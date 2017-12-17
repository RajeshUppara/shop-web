import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../../shared/common/app.form';

export class DomainForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl("domain_name", this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl("domain_desc", this.getController(null, this.TYPE_DATA, null, 50));
    }
}