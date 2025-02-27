
export default function CertSelector({ onChange, containerStyle }) {
  return (
    <div className={containerStyle}>
      <select
        onChange={(e) => onChange(e.target.value)} // Fix: Pass only the value
        id="Certificate Toggle"
      >
        <option value="">--Choose  a Certification--</option>
        <option value="Udemy_CCST_Certificate.pdf">Udemy CCST Training Certificate</option>
        <option value="Introduction_to_Data_Science.pdf">Introduction to Data Science</option>
        <option value="Networking_Basics.pdf">Networking Basics</option>
        <option value="IP_Addressing.pdf">IP Addressing</option>
        <option value="App_in_a_day.pdf">Microsoft Power Platform</option>
      </select>
    </div>
  );
}
