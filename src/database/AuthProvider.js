import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (form) => {
                    try {
                        await auth().signInWithEmailAndPassword(form.username, form.password)

                    } catch (e) {
                        console.log(e, e.Error)
                        alert("Email or password is incorrect!")
                    }
                },
                signup: async (form) => {
                    try {
                        await auth().createUserWithEmailAndPassword(form.email, form.password).then((result) => {
                            result.user.updateProfile({ displayName: form.email }).then(() => {
                                firestore().collection('users').add({
                                    id: result.user.uid,
                                    name: form.username,
                                    email: form.email,
                                    number: form.number
                                })
                            })
                        })

                    } catch (e) {
                        alert("Email id is already in use by another account")
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e)
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}