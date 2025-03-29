<template>
  <div class="contact-list">
    <div class="list-header">
      <div class="search-bar">
        <i class="fas fa-search search-icon"></i>
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search contacts..."
          class="search-input"
        >
      </div>
      <router-link to="/add" class="add-contact-btn">
        <i class="fas fa-plus"></i> Add New Contact
      </router-link>
    </div>

    <div class="contacts-grid">
      <div v-for="contact in filteredContacts" :key="contact.id" class="contact-card">
        <router-link :to="'/contact/' + contact.id" class="contact-link">
          <div class="contact-avatar">
            <i class="fas fa-user"></i>
          </div>
          <div class="contact-info">
            <h3>{{ contact.lastName }}, {{ contact.firstName }}</h3>
            <p><i class="fas fa-envelope"></i> {{ contact.email }}</p>
            <p><i class="fas fa-birthday-cake"></i> {{ formatDate(contact.birthdate) }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [],
      searchQuery: ''
    }
  },
  computed: {
    filteredContacts() {
      const query = this.searchQuery.toLowerCase()
      return this.contacts
        .filter(contact => 
          contact.firstName.toLowerCase().includes(query) ||
          contact.lastName.toLowerCase().includes(query)
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
    }
  },
  methods: {
    formatDate(date) {
      return date ? new Date(date).toLocaleDateString() : 'Not specified'
    },
    loadContacts() {
      const stored = localStorage.getItem('contacts')
      this.contacts = stored ? JSON.parse(stored) : []
    }
  },
  mounted() {
    this.loadContacts()
  }
}
</script>

<style scoped>
.contact-list {
  padding: 20px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 20px;
  flex-wrap: wrap;
}

.search-bar {
  flex: 1;
  position: relative;
  min-width: 250px;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.search-input {
  width: 100%;
  padding: 0.8rem 0.8rem 0.8rem 2.5rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.add-contact-btn {
  background-color: #27ae60;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;
}

.add-contact-btn:hover {
  background-color: #219a52;
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.contact-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.contact-card:hover {
  transform: translateY(-2px);
}

.contact-link {
  display: flex;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  gap: 15px;
}

.contact-avatar {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.contact-info {
  flex: 1;
}

.contact-info h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.contact-info p {
  margin: 0.5rem 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 600px) {
  .list-header {
    flex-direction: column;
  }

  .search-bar {
    width: 100%;
  }

  .add-contact-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>