Vue.component('app-filter', {// <app-title></app-title>})
    template: `
            <form action=" ">
            <div class="form-group">
                <input type="text" :value="value" @input="onValueUpdated($event.target.value)" class="form-control">
            </div>
            <p>
            <span class="badge badge-light" v-for="tag in tags" @click="onTagClicked(tag)">#{{tag}} </span>
</p>
        </form>
    `,
    props: ['value', 'tags'],
    methods: {
        onValueUpdated(value){
            this.$emit('input', value);
        },
        onTagClicked(tag) {
            this.$emit('tag', tag);
        }
    }
});