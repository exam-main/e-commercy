import React, { useState } from 'react';

const Buy = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Xabaringiz muvaffaqiyatli yuborildi!');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        alert(data.error || 'Xatolik yuz berdi');
      }
    } catch (error) {
      alert('Server bilan bog‘lanishda xatolik yuz berdi');
      console.error(error);
    }
  };

  return (
    <div className="font-sans p-[50px]">
      <section className="pt-20 px-6 md:px-16 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 items-center">
           
          </h2>

       

          <div className="bg-white shadow rounded-xl p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
              
            </h2>

            <form className="space-y-5 max-w-2xl mx-auto" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2 items-center">
                  Toliq ismingizni kiriting
                </label>
                <div className="flex items-center border rounded-lg px-3">
                  <span className="text-gray-400 mr-2">👤</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="F.I.Sh"
                    className="w-full p-2 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Telefon</label>
                <div className="flex items-center border rounded-lg px-3">
                  <span className="text-gray-400 mr-2">📱</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+998"
                    className="w-full p-2 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Xabar</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Matn"
                  className="w-full border rounded-lg p-3 outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;
