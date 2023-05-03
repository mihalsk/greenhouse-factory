<script>
export default {
  name: 'Goods',
  data () {
    return {
      goods: [],
      name: '',
      price: '',
      photo: '',
      count: ''
    }
  },
  methods: {
    addGoods () {
      axios.post('http://localhost:5000/goods', {
        name: this.name,
        price: this.price,
        photo: this.photo,
        count: this.count
      })
        .then(response => {
          console.log(response)
          this.goods.push(response.data)
          this.name = ''
          this.price = ''
          this.photo = ''
          this.count = ''
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>