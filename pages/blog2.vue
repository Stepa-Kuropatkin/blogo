<template>
    <div>
        <h1>
            {{ blog.title }}
        </h1>
        <v-col>
        <v-content id="content">
            {{ blog.text }}
        </v-content>
        </v-col>
        <v-col>
            <v-text-field readonly v-for="comment in blog.comments" :key="comment" :value="comment" outlined  hint="Комментарий" persistent-hint ="clear" :append-outer-icon="'clear'" @click:append-outer="removeCom" >
            </v-text-field>
        </v-col>
        <v-col>
            <v-textarea clearable rows="1" auto-grow="true" class="com" type="text" placeholder="Напишите комментарий" v-model="blogComment" @keyup.enter="newComment"></v-textarea>
            <V-btn dark depressed @click="newComment">Отправить</V-btn>
        </v-col>
    </div>

    
</template>

<style class='scss'>
    #content {
        display: block;
        justify-content: center;
    }
</style>

<script>
export default {
    mounted() {
        try {
            this.blog.comments = JSON.parse(localStorage[this.blogId]);
        } catch (e) {}
    },
    data () {
        return {
            blogId: 2,
            blogComment: '',
            blog: {
                id:1,
                title: 'Блог 2',
                text: 'Идейные соображения высшего порядка, а также укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности способствует подготовки и реализации модели развития. Равным образом сложившаяся структура организации в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом сложившаяся структура организации позволяет оценить значение направлений прогрессивного развития. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации новых предложений. ',
                comments: [],
            },
            
        }
    },
        methods: {
        newComment (v) {  
                        if(!this.blogComment) return;          
            this.blog.comments.push (this.blogComment);
            localStorage[this.blogId] = JSON.stringify(this.blog.comments);
        },
        removeCom(x) {
            this.blog.comments.splice(x,1);
            localStorage[this.blogId] = JSON.stringify(this.blog.comments);
        },
    },
}

</script>