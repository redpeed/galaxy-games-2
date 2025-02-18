import React, {useState} from "react";

const useFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedTime, setLastSubmittedTime] = useState(0);

  // Add your event handlers here
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmittedTime < 5000) {
      alert('Please wait 5 seconds before submitting again.');
      return;
    }
    setLastSubmittedTime(now);

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzRL4gTqBNZFbLhuX8iyFoX_Hn945km4dhiiclurGuIckoAK15wtwUW12e_-VpCEx9R/exec';

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email}),
    })
      .then(() => {
        setIsSubmitted(true);
        setEmail('');
        // Optionally reset the button after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('There was an error submitting your email.');
      });
  };

  return {
    handleFormSubmit,
    handleInputChange,
    email,
    isSubmitted,
  }
}

export default useFooter;