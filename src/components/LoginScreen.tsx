
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Clock } from "lucide-react"
import ProfilePage from "./ProfilePage"

interface logindetails {
    email: string,
    password: string,
    rememberMe: boolean,
    otp: string,
}

function LoginScreen(){
    const [stg1LoggedIn, setStg1LoggedIn] = useState<boolean>(false)
    const [loggedIn, setloggedIn] = useState<boolean>(false)
    const [loginDetails, setLoginDetails] = useState<logindetails>({
        email: "test@sweetcash.com",
        password: "password123",
        rememberMe: false,
        otp: "",
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Remove the problematic useEffect that was skipping OTP stage
    // useEffect(() => {
    //     if (stg1LoggedIn) {
    //         setloggedIn(true)
    //     }
    // }, [stg1LoggedIn])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simulate API call
        setTimeout(() => {
            if (loginDetails.email === "test@sweetcash.com" && loginDetails.password === "password123") {
                setStg1LoggedIn(true)
            }
            setIsLoading(false)
        }, 1500)
    }

    const handleOtpVerification = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simulate OTP verification
        setTimeout(() => {
            if (loginDetails.otp === "123456") {
                setloggedIn(true)  // Only set loggedIn to true after OTP verification
            }
            setIsLoading(false)
        }, 1000)
    }

    if (loggedIn) {
        return <ProfilePage />
    }
    
    return (
        <div className="min-h-screen flex">
            {/* Left Column - Advertisement */}
            <div className="hidden lg:flex lg:w-1/2 bg-primary text-primary-foreground p-12 flex-col justify-center">
                <div className="max-w-md">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-4">SweetCash</h1>
                        <p className="text-xl opacity-90">Your trusted partner for quick and easy loans</p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <TrendingUp className="h-6 w-6 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">Competitive Rates</h3>
                                <p className="opacity-80">Get the best interest rates in the market with flexible repayment options.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">Quick Approval</h3>
                                <p className="opacity-80">Get approved in minutes, not days. Fast processing for urgent needs.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <Shield className="h-6 w-6 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">Secure & Trusted</h3>
                                <p className="opacity-80">Bank-level security with transparent terms and conditions.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex space-x-2">
                        <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                            ⭐ 4.9/5 Rating
                        </Badge>
                        <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                            50k+ Happy Customers
                        </Badge>
                    </div>
                </div>
            </div>
            
            {/* Right Column - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
                <Card className="w-full max-w-md">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">
                            {stg1LoggedIn ? "Enter OTP" : "Welcome Back"}
                        </CardTitle>
                        <CardDescription>
                            {stg1LoggedIn 
                                ? "Please enter the 6-digit code sent to your email" 
                                : "Sign in to your SweetCash account"
                            }
                        </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                        {!stg1LoggedIn ? (
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={loginDetails.email}
                                        onChange={(e) => setLoginDetails({...loginDetails, email: e.target.value})}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={loginDetails.password}
                                        onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        checked={loginDetails.rememberMe}
                                        onCheckedChange={(checked) => 
                                            setLoginDetails({...loginDetails, rememberMe: checked as boolean})
                                        }
                                    />
                                    <Label htmlFor="remember" className="text-sm font-normal">
                                        Remember me
                                    </Label>
                                </div>
                                
                                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                                    {isLoading ? "Signing in..." : "Sign In"}
                                </Button>
                                
                                <Separator />
                                
                                <div className="text-center text-sm text-muted-foreground">
                                    <p>Test credentials:</p>
                                    <p>Email: test@sweetcash.com</p>
                                    <p>Password: password123</p>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleOtpVerification} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="otp">Verification Code</Label>
                                    <Input
                                        id="otp"
                                        type="text"
                                        value={loginDetails.otp}
                                        onChange={(e) => setLoginDetails({...loginDetails, otp: e.target.value})}
                                        placeholder="Enter 6-digit code"
                                        maxLength={6}
                                        className="text-center text-2xl tracking-widest"
                                        required
                                    />
                                </div>
                                
                                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                                    {isLoading ? "Verifying..." : "Verify OTP"}
                                </Button>
                                
                                <div className="text-center">
                                    <Button 
                                        type="button" 
                                        variant="ghost" 
                                        size="sm"
                                        onClick={() => setStg1LoggedIn(false)}
                                    >
                                        Back to Login
                                    </Button>
                                </div>
                                
                                <Separator />
                                
                                <div className="text-center text-sm text-muted-foreground">
                                    <p>Test OTP: 123456</p>
                                </div>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default LoginScreen