export default function Home() {
  return (
    <div className="container">
      <div className="page-header">
        <div className="page-title-section">
          <h2 className="page-title">GymTrack'e Hoş Geldiniz! 💪</h2>
          <p className="page-subtitle">Fitness yolculuğunuzu takip edin ve hedeflerinize ulaşın</p>
        </div>
      </div>
      
      <div className="entity-grid">
        <div className="entity-card">
          <h3>🏋️ Egzersizler</h3>
          <p>Egzersiz kütüphanenizi yönetin ve yeni hareketler ekleyin</p>
        </div>
        
        <div className="entity-card">
          <h3>📋 Planlar</h3>
          <p>Antrenman planlarınızı oluşturun ve organize edin</p>
        </div>
        
        <div className="entity-card">
          <h3>📏 Ölçümler</h3>
          <p>Vücut ölçümlerinizi kaydedin ve ilerlemenizi takip edin</p>
        </div>
        
        <div className="entity-card">
          <h3>🔧 Ekipmanlar</h3>
          <p>Kullanılabilir spor ekipmanlarını yönetin</p>
        </div>
        
        <div className="entity-card">
          <h3>💪 Kas Grupları</h3>
          <p>Hedefleyeceğiniz kas gruplarını tanımlayın</p>
        </div>
        
        <div className="entity-card">
          <h3>👥 Kullanıcılar</h3>
          <p>Kullanıcı hesaplarını yönetin ve profilleri güncelleyin</p>
        </div>
      </div>
    </div>
  );
}