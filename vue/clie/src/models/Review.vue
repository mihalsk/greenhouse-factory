
<script>
export default {
  name: 'Review',
  data () {
    return {
      reviews: [],
      Author_name: '',
      text: '',
      photo: ''
    }
  },
  methods: {
    addReview () {
      axios.post('http://localhost:5000/reviews', {
        Author_name: this.Author_name,
        text: this.text,
        photo: this.photo
      })
        .then(response => {
          console.log(response)
          this.reviews.push(response.data)
          this.Author_name = ''
          this.text = ''
          this.photo = ''
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>