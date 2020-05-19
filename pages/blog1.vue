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
            blogId: 1,
            blogComment: '',
            blog: {
                id:1,
                title: 'Блог 1',
                text: 'С другой стороны укрепление и развитие структуры позволяет оценить значение дальнейших направлений развития. Разнообразный и богатый опыт новая модель организационной деятельности требуют от нас анализа модели развития. Повседневная практика показывает, что консультация с широким активом играет важную роль в формировании соответствующий условий активизации. Значимость этих проблем настолько очевидна, что сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации соответствующий условий активизации. ',
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


