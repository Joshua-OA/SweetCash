import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { 
    User, 
    DollarSign,  
    LogOut
} from "lucide-react"

function ProfilePage(){
    const [user] = useState({
        name: "John Doe",
        email: "test@sweetcash.com",
        memberSince: "January 2025",
        totalBorrowed: 15000,
        nextPayment: "Dec 15, 2025",
        nextPaymentAmount: 850
    })

    const handleLogout = () => {
        // In a real app, this would clear auth tokens and redirect
        window.location.reload()
    }

    const handlePayBack = () => {
        // Handle payment logic here
        alert("Payment functionality would be implemented here")
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="bg-primary text-primary-foreground p-4 shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold">SweetCash</h1>
                        <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                            Dashboard
                        </Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={handleLogout}
                            className="text-primary-foreground hover:bg-primary-foreground/20"
                        >
                            <LogOut className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Main Dashboard - Simple */}
                    <div className="lg:col-span-3">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.name}!</h2>
                            <p className="text-muted-foreground">Member since {user.memberSince}</p>
                        </div>

                        {/* Simple Dashboard Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <Card>
                                <CardHeader className="text-center">
                                    <CardTitle className="text-lg">Current Amount Borrowed</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-4">
                                        GHS {user.totalBorrowed.toLocaleString()}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="text-center">
                                    <CardTitle className="text-lg">Next Payment Date</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="text-2xl font-bold text-accent mb-2">
                                        {user.nextPayment}
                                    </div>
                                    <div className="text-lg text-muted-foreground mb-4">
                                        GHS {user.nextPaymentAmount}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Pay Back Button */}
                        <div className="text-center">
                            <Button 
                                onClick={handlePayBack}
                                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg"
                                size="lg"
                            >
                                <DollarSign className="h-5 w-5 mr-2" />
                                Pay Back Now
                            </Button>
                        </div>
                    </div>

                    {/* Profile Side Card */}
                    <Card className="lg:col-span-1">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <User className="h-5 w-5 mr-2" />
                                Profile
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label className="text-sm font-medium text-muted-foreground">Full Name</Label>
                                <p className="text-lg font-medium">{user.name}</p>
                            </div>
                            <div>
                                <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                                <p className="text-sm">{user.email}</p>
                            </div>
                            <div>
                                <Label className="text-sm font-medium text-muted-foreground">Member Since</Label>
                                <p className="text-sm">{user.memberSince}</p>
                            </div>
                            <div>
                                <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                                <Badge className="bg-accent text-accent-foreground">Active</Badge>
                            </div>
                            <div className="pt-4">
                                <Button variant="outline" className="w-full" size="sm">
                                    Edit Profile
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}

export default ProfilePage