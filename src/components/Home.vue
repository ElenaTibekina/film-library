<template lang="pug">
    .content-wrapper
        section
            .container
                h1.ui-title-1 Home
                input(
                    type="text",
                    placeholder="What will we watch?"
                    v-model="taskTitle"
                    @keyup.enter="newTask"
                )
                textarea(
                    type="text"
                    v-model="taskDescription"
                    @keyup.enter="newTask"
                )
                .option-list
                    input.what-watch--radio(
                        type="radio"
                        id="radioFilm"
                        value="Film"
                        v-model="whatWhatch"
                    )
                    label(
                        for="radioFilm"
                    ) Film

                    input.what-watch--radio(
                        type="radio"
                        id="radioTV"
                        value="TV-Show"
                        v-model="whatWhatch"
                    )
                    label(
                        for="radioTV"
                    ) TV-Show
                .total-time
                    .total-time__film(
                        v-if="whatWhatch === 'Film'"
                    )
                        span Total Film Time
                    .total-time__TV(
                        v-if="whatWhatch === 'TV-Show'"
                    )
                        span Total TV-Show Time
                .tag-list
                .ui-tag__wrapper
                    .ui-tag
                        span.tag-title Dogs
                        span.button-close        
</template>
<script>
export default {
    data() {
        return {
            taskTitle: '',
            taskDescription: '',
            whatWhatch: 'Film',
            taskId: 3
        }
    }, 
    methods: {
        newTask () {
            if(this.taskTitle === '') {
                return
            }
            this.tasks.push({
                id: this.taskId,
                title: this.taskTitle,
                description: this.taskDescription,
                whatWhatch: this.whatWhatch,
                completed: false,
                editing: false
            })

            // Reset
            this.taskId += 1
            this.taskTitle = ''
            this.taskDescription = ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.option-list
    display flex
    .what-watch--radio
        margin-right 12px
    label
        margin-right 20px
        &:last-child
            margin-right 0
</style>
