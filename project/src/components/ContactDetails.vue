<template>
  <div class="details-container">
    <div v-if="contact" class="contact-details">
      <div class="details-header">
        <router-link to="/" class="back-button">
          <i class="fas fa-arrow-left"></i> Back to Contacts
        </router-link>
        <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      </div>
      
      <div class="contact-avatar-large">
        <i class="fas fa-user"></i>
      </div>

      <div class="info-group">
        <label><i class="fas fa-envelope"></i> Email</label>
        <p>{{ contact.email }}</p>
      </div>

      <div class="info-group">
        <label><i class="fas fa-birthday-cake"></i> Birthdate</label>
        <p>{{ formatDate(contact.birthdate) }}</p>
      </div>

      <div class="info-group">
        <label><i class="fas fa-phone"></i> Phone</label>
        <p>{{ contact.phone }}</p>
      </div>

      <div class="info-group">
        <label><i class="fas fa-map-marker-alt"></i> Address</label>
        <p>{{ contact.address }}</p>
      </div>

      <div class="action-buttons">
        <router-link :to="'/edit/' + contact.id" class="btn-edit">
          <i class="fas fa-edit"></i> Edit Contact
        </router-link>
        <button @click="deleteContact" class="btn-delete">
          <i class="fas fa-trash-alt"></i> Delete Contact
        </button>
      </div>
    </div>
    <div v-else class="not-found">
      <i class="fas fa-exclamation-circle"></i>
      Contact not found
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: null
    }
  },
  methods: {
    formatDate(date) {
      return date ? new Date(date).toLocaleDateString() : 'Not specified'
    },
    loadContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
      this.contact = contacts.find(c => c.id === this.$route.params.id)
    },
    deleteContact() {
      if (confirm('Are you sure you want to delete this contact?')) {
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
        contacts = contacts.filter(c => c.id !== this.contact.id)
        localStorage.setItem('contacts', JSON.stringify(contacts))
        this.$router.push('/')
      }
    }
  },
  created() {
    this.loadContact()
  }
}
</script>

<style scoped>
.details-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.contact-details {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.details-header {
  margin-bottom: 2rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #666;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

.back-button:hover {
  color: #3498db;
}

.contact-details h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #eee;
}

.contact-avatar-large {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  margin: 0 auto 2rem;
}

.info-group {
  margin-bottom: 1.5rem;
}

.info-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.info-group p {
  color: #2c3e50;
  font-size: 1.1rem;
  margin: 0;
  padding-left: 24px;
}

.action-buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.btn-edit, .btn-delete {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
}

.btn-edit {
  background-color: #3498db;
  color: white;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
}

.btn-edit:hover {
  background-color: #2980b9;
}

.btn-delete:hover {
  background-color: #c0392b;
}

.not-found {
  text-align: center;
  color: #7f8c8d;
  font-size: 1.2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

@media (max-width: 600px) {
  .action-buttons {
    flex-direction: column;
  }

  .btn-edit, .btn-delete {
    justify-content: center;
  }
}
</style>