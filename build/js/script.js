let vm_1 = new Vue ({
    el: '#vue-1',
    data: {
        message: 'Hello Vue.js!',
        status: 100,
        visible: 1,
        isActive: true,
        isBtn: true,
        w: 100
    }
});

let vm_2 = new Vue ({
    el: '#vue-2',
    data: {
        list: ['ноль', 'один', 'два'],
        users: [
            {id: 1, name: 'Иван'},
            {id: 2, name: 'Сергей'},
            {id: 3, name: 'Петя'}
        ],
        counter: 0
    },
    created: function() { //хук жизненного цикла объекта
        this.counter = 100; //обращаемся к переменной через контекст вызова this
        this.high();
    },
    methods: {
        showAlert_1() {
            alert('Hellow_1');
        },
        showAlert_2() {
            alert('Hellow_2');
        },
        high() {
            this.counter++;
        }
    }
});

let vm_3 = new Vue ({
    el: '#vue-3',
    data: {
        hashtags: [],
        cities: [],
        textSearch: '',
        url: {
            hashtags: 'https://dka-develop.ru/api?type=hashtag',
            cities: 'https://dka-develop.ru/api?type=city'
        }
    },
    watch: { //наблюдатель. Следит за свойствами. У него есть список ситуаций, в резултате которых он будет принимать решение. Надо только сказать, за каким свойством ему следить.
        textSearch: function() { //если значение свойства меняется, срабатывает код, который внутри анонимной функции.
            if(this.textSearch.length>3) {
                this.textSearch = 'Меняем содержимое поля из кода';
            }
        }
    },
    created: function() {
        console.log(this.url.hashtags); //проверяем, что возвращает свойство. Работает ли в консоли ссылка.
    },
    methods: {
        getHashtags() {
            //then выполняется, когда мы получили hashtags успешено.
            axios.get(this.url.hashtags).then((response) => { //такая запись удобна. Можно будет исправить url в data и эта ссылка изменится везде.
                console.log(this);
                this.hashtags = response.data;
            }); 
        },
        getCities() {
            //then выполняется, когда мы получили hashtags успешено.
            axios.get(this.url.cities).then((response) => { //такая запись удобна. Можно будет исправить url в data и эта ссылка изменится везде.
                console.log(response.data);
                this.cities = response.data;
            }); 
        }
    }
});