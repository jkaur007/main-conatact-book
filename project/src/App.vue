<template>
  <div class="app-wrapper">
    <div class="app-container">
      <nav class="navbar">
        <h1><i class="fas fa-address-book"></i> Contact Book</h1>
        <div class="nav-links">
          <router-link to="/" class="nav-link">
            <i class="fas fa-users"></i> Contacts
          </router-link>
          <router-link to="/add" class="nav-link">
            <i class="fas fa-plus"></i> Add Contact
          </router-link>
        </div>
      </nav>
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="footer-content">
        <p><i class="fas fa-book"></i> Contact Book App</p>
        <div class="footer-links">
          <a href="#" class="footer-link"><i class="fab fa-github"></i></a>
          <a href="#" class="footer-link"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="footer-link"><i class="fab fa-twitter"></i></a>
        </div>
        <p>&copy; 2024 Contact Book. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  flex: 1;
  width: 100%;
}

.navbar {
  background-color: #2c3e50;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.navbar h1 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link:hover {
  background-color: #34495e;
}

.router-link-active {
  background-color: #34495e;
}

.footer {
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 1rem 0;
}

.footer-link {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #3498db;
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .nav-links {
    flex-direction: column;
  }

  .nav-link {
    justify-content: center;
  }
}
</style>