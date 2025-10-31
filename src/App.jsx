import './App.css'
import Form from "./components/Form.jsx"
import Button from "./components/Button.jsx"
import Property from "./components/property.jsx"
import { Month, Year } from "./components/Time.jsx"
import { useState } from "react"

function App() {
    const [edit, setEditMode] = useState(true)
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      degree: "",
      city: "",
      school: "",
      eduMonthStart: "",
      eduYearStart: "",
      eduMonthEnd: "",
      eduYearEnd: "",
      companyName: "",
      jobTitle: "",
      workResponsibility: "",
      workMonthStart: "",
      workYearStart: "",
      workMonthEnd: "",
      workYearEnd: "",
    });
    return (
        edit === true ? (
            <>
                <h2>General Info</h2>
                <Form>
                    <Property name="Name: " type="text" placeholder="Enter your name" id="name" value={formData.name} onChange={(val) => setFormData({...formData, name: val})}></Property>
                    <Property name="Email: " type="email" placeholder="mailname@something.com" id="email" value={formData.email} onChange={(val) => setFormData({...formData, email: val})}></Property>
                    <Property name="Phone: " type="tel" placeholder="1234567890" id="phone" value={formData.phone} onChange={(val) => setFormData({...formData, phone: val})}></Property>
                </Form>

                <h2>Educational Experience</h2>
                <Form>
                    <Property name="Degree: " type="text" id="degree" placeholder="Bsc. Computer Science" value={formData.degree} onChange={(val) => setFormData({...formData, degree: val})}></Property>
                    <Property name="City / Town: " type="text" id="city" placeholder="Fresno" value={formData.city} onChange={(val) => setFormData({...formData, city: val})}></Property>
                    <Property name="School: " type="text" id="school" placeholder="e.g Arizona State University" value={formData.school} onChange={(val) => setFormData({...formData, school: val})}></Property>
                    <div>
                        <div>
                            <label>Start Date: </label>
                            <Month id="edu-month-start" value={formData.eduMonthStart} onChange={(val) => setFormData({...formData, eduMonthStart: val})}></Month>
                            <Year id="edu-year-start" value={formData.eduYearStart} onChange={(val) => setFormData({...formData, eduYearStart: val})}></Year>
                        </div>
                        <div>
                            <label>End Date: </label>
                            <Month id="edu-month-end" value={formData.eduMonthEnd} onChange={(val) => setFormData({...formData, eduMonthEnd: val})}></Month>
                            <Year id="edu-year-end" value={formData.eduYearEnd} onChange={(val) => setFormData({...formData, eduYearEnd: val})}></Year>
                        </div>
                    </div>
                </Form>

                <h2>Practical Experience</h2>
                <Form>
                    <Property name="Company Name: " type="text" placeholder="Microsoft" id="company-name" value={formData.companyName} onChange={(val) => setFormData({...formData, companyName: val})}></Property>
                    <Property name="Job Title: " type="text" placeholder="Junior Web Developer" id="job-title" value={formData.jobTitle} onChange={(val) => setFormData({...formData, jobTitle: val})}></Property>
                    <Property name="Work Responsibility: " placeholder="supervising product codebase" id="work-responsibility" value={formData.workResponsibility} onChange={(val) => setFormData({...formData, workResponsibility: val})}></Property>
                    <div>
                        <div>
                            <label>Start Date: </label>
                            <Month id="work-month-start" value={formData.workMonthStart} onChange={(val) => setFormData({...formData, workMonthStart: val})}></Month>
                            <Year id="work-year-start" value={formData.workYearStart} onChange={(val) => setFormData({...formData, workYearStart: val})}></Year>
                        </div>
                        <div>
                            <label>End Date: </label>
                            <Month id="work-month-end" value={formData.workMonthEnd} onChange={(val) => setFormData({...formData, workMonthEnd: val})}></Month>
                            <Year id="work-year-end" value={formData.workYearEnd} onChange={(val) => setFormData({...formData, workYearEnd: val})}></Year>
                        </div>
                    </div>
                </Form>

                <Button onClick={() => setEditMode(false)}>Submit</Button>
            </>
        ) : 
        (
            <>
                <h2>General Info</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Phone: {formData.phone}</p>

                <h2>Educational Experience</h2>
                <p>Degree: {formData.degree}</p>
                <p>City/ Town: {formData.city}</p>
                <p>School: {formData.school}</p>
                <p>School start Date: {formData.eduMonthStart}/{formData.eduYearStart}</p>
                <p>School End Date: {formData.eduMonthEnd}/{formData.eduYearEnd}</p>

                <h2>Practical Experience</h2>
                <p>Company Name: {formData.companyName}</p>
                <p>Job Title: {formData.jobTitle}</p>
                <p>Work Responsibility: {formData.workResponsibility}</p>
                <p>Work Start Date: {formData.workMonthStart}/{formData.workYearStart}</p>
                <p>Work End Date: {formData.workMonthEnd}/{formData.workYearEnd}</p>
                <p></p>
                <Button type="button" onClick={() => setEditMode(true)}>Edit</Button>
            </>
        )
    )
}

export default App