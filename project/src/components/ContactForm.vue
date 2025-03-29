<template>
  <div class="form-container">
    <h2>{{ isEditing ? 'Edit Contact' : 'Add New Contact' }}</h2>
    <form @submit.prevent="saveContact" class="contact-form">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input 
          type="text" 
          id="firstName" 
          v-model="contact.firstName" 
          required
        >
      </div>

      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input 
          type="text" 
          id="lastName" 
          v-model="contact.lastName" 
          required
        >
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="contact.email" 
          required
        >
      </div>

      <div class="form-group">
        <label for="birthdate">Birthdate</label>
        <input 
          type="date" 
          id="birthdate" 
          v-model="contact.birthdate"
        >
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input 
          type="tel" 
          id="phone" 
          v-model="contact.phone"
        >
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <textarea 
          id="address" 
          v-model="contact.address"
          rows="3"
        ></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-primary">
          {{ isEditing ? 'Update Contact' : 'Add Contact' }}
        </button>
        <button type="button" @click="$router.push('/')" class="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        birthdate: '',
        phone: '',
        address: ''
      },
      isEditing: false
    }
  },
  created() {
    const id = this.$route.params.id
    if (id) {
      this.isEditing = true
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
      const contact = contacts.find(c => c.id === id)
      if (contact) {
        this.contact = { ...contact }
      }
    }
  },
  methods: {
    saveContact() {
      let contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
      
      if (this.isEditing) {
        const index = contacts.findIndex(c => c.id === this.contact.id)
        if (index !== -1) {
          contacts[index] = this.contact
        }
      } else {
        this.contact.id = Date.now().toString()
        contacts.push(this.contact)
      }
      
      localStorage.setItem('contacts', JSON.stringify(contacts))
      this.$router.push('/contact/' + this.contact.id)
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.contact-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus, textarea:focus {
  border-color: #3498db;
  outline: none;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-secondary:hover {
  background-color: #7f8c8d;
}
</style>