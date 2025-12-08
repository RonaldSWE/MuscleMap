function Settings() {
  return (
    <>
      <h1 className="header">Settings</h1>

      <label id="change-theme-label">Change theme</label>
      <select id="change-theme-box">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </>
  );
}

export default Settings;
