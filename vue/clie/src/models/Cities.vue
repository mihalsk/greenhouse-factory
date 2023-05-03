<script>
export default {
  name: 'Cities',
  data () {
    return {
      cities: [],
      name: '',
      phone: '',
      coords: ''
    }
  },
  methods: {
    addCity () {
      axios.post('http://localhost:5000/cities', {
        name: this.name,
        phone: this.phone,
        coords: this.coords
      })
        .then(response => {
          console.log(response)
          this.cities.push(response.data)
          this.name = ''
          this.phone = ''
          this.coords = ''
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>