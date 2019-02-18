import Vue from 'vue';
import Dialog from '@/components/Dialog.vue';

const DialogHelper = {
    showDialog (context, { subject, message, ok, cancel }) {
        let DialogVM = Vue.extend(Dialog);
        let vm = new DialogVM({
            parent: context,
            propsData: {
                subject: subject,
                message: message,
                onPrimary () {
                    ok();
                    vm.close();
                },
                onSecondary () {
                    cancel();
                    vm.close();
                }
            }
        });
        vm.show();
    }
}
export default DialogHelper;