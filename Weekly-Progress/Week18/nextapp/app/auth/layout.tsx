export default function AuthLayout({children}){
  return <div>
     <div className="border-b p-4">Header</div>
     {children}
  </div>
}