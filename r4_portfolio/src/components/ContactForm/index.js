import styles from "./style.module.css";

export default function ContactForm(props) {
  return (
    <form action='' className={styles.contactForm}>
      <label for='name'>Your Name</label>
      <input type='text' placeholder='Name' required />
      <label for='email'>Email</label>
      <input type='email' placeholder='email@example.com' required />
      <label for='text'>Message</label>
      <textarea name='' id='' placeholder='Enter your message'></textarea>
      <input type='submit' value='Submit' class='contact-form-btn' />
    </form>
  );
}
