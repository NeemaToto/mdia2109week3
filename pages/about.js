import styles from '@/styles/Home.module.css'
import data from '../data/employees.json'
import { useState } from 'react'
import EmployeeCard from '../components/employeeCard'
import Link from 'next/link'


export default function About() {
    const [information, setInformation] = useState([...data])
    return (<main className={styles.main}>
        <div className={styles.aboutHeader}>About Page</div>
        
        <div className={styles.employeeContainer}>
        <div className={styles.aboutDescription}>
          <p>
            <Link href="/">Main Page</Link>
          </p>
          
        </div>
            <div className={styles.cardContainer}>
                <div className={styles.cardShowcase}>
                    <img src='/icon/person.png' width="100"/>
                    {
                        information && information.map((info, index) => {
                            if (info.employeeName === "Marisa Lenarduzzi") {
                                return (
                                    <EmployeeCard key={index} name={info.employeeName} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                    {
                        information && information.map((info, index) => {
                            if (info.employeeID === "1A0") {
                                return (
                                    <EmployeeCard key={index} ID={info.employeeID} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                    {
                        information && information.map((info, index) => {
                            if (info.employeeDepartment === "Human Resources") {
                                return (
                                    <EmployeeCard key={index} department={info.employeeDepartment} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                    {
                        information && information.map((info, index) => {
                            if (info.employeeEmail === "mlduzzi@dunder.com") {
                                return (
                                    <EmployeeCard key={index} email={info.employeeEmail} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                </div>
                <div className={styles.cardShowcase}>
                    <img src='/icon/person.png' width="100"/>
                    {
                        information && information.map((info, index) => {
                            if (info.employeeName === "Derek Zoolander") {
                                return (
                                    <EmployeeCard key={index} name={info.employeeName} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                    {
                        information && information.map((info, index) => {
                            if (info.employeeID === "2B0") {
                                return (
                                    <EmployeeCard key={index} ID={info.employeeID} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                    {
                        information && information.map((info, index) => {
                            if (info.employeeDepartment === "Fashion") {
                                return (
                                    <EmployeeCard key={index} department={info.employeeDepartment} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                    {
                        information && information.map((info, index) => {
                            if (info.employeeEmail === "magnum@dunder.com") {
                                return (
                                    <EmployeeCard key={index} email={info.employeeEmail} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                </div>
                <div className={styles.cardShowcase}>
                    <img src='/icon/person.png' width="100"/>
                    {
                        information && information.map((info, index) => {
                            if (info.employeeName === "Chuck McGill") {
                                return (
                                    <EmployeeCard key={index} name={info.employeeName} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                    {
                        information && information.map((info, index) => {
                            if (info.employeeID === "3C0") {
                                return (
                                    <EmployeeCard key={index} ID={info.employeeID} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                    {
                        information && information.map((info, index) => {
                            if (info.employeeDepartment === "The Law.") {
                                return (
                                    <EmployeeCard key={index} department={info.employeeDepartment} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                    {
                        information && information.map((info, index) => {
                            if (info.employeeEmail === "rudeguy@dunder.com") {
                                return (
                                    <EmployeeCard key={index} email={info.employeeEmail} backgroundColor="red" font="50px" />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    </main>
    )
}