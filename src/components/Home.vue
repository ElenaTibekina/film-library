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
        section
            .container
                .task-list
                    .task-item(
                        v-for="task in tasks"
                        :key="task.id"
                        :class="{ completed: task.completed }"
                    )
                        .ui-card.ui-card--shadow
                            .task-item__info
                                .task-item__main-info
                                    span.ui-label.ui-label--light {{ task.whatWhatch }}
                                    span Total Time:
                                span.button-close
                            .task-item__content
                                .task-item__header
                                    .ui-checkbox-wrapper
                                        input.ui-checkbox(
                                            type='checkbox'
                                            v-model="task.completed"
                                        )
                                    span.ui-title-3 {{ task.title }}
                                .task-item__body
                                    p.ui-text-regular {{ task.description }}
            
</template>
<script>
export default {
    data() {
        return {
            taskTitle: '',
            taskDescription: '',
            whatWhatch: 'Film',
            taskId: 3,
            tasks: [
                {
                    'id': 1,
                    'title': 'GrowthBusters: Hooked on Grouth',
                    'description': 'I directed this documentary chalinging lalalal lalalalal lalalajhbcbjhj lskksjshhshsh ksksjhshj ksksjjsj hfhjhd hdsh bbbdsgdgsjgdj gdgdggds bsbsgg bsbsb',
                    'whatWhatch': 'film',
                    'completed': false,
                    'editing': false
                },
                {
                    'id': 2,
                    'title': 'Game of Thrones',
                    'description': 'The best TV-show',
                    'whatWhatch': 'TV-show',
                    'completed': false,
                    'editing': false
                }
            ]
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
.task-item
    margin-bottom 20px
    &:last-child
        margin-bottom 0

.ui-label
    margin-right 8px

.task-item__info
    display flex
    align-items center
    justify-content space-between
    margin-bottom 20px
    .button-close
        width 20px
        height @width
.task-item__header
    display flex
    align-items center
    margin-bottom 18px
    .ui-checkbox-wrapper
        margin-right 8px
    .ui-title-3
        margin-bottom 0
</style>
