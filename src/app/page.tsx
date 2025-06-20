import { 
  SignedOut, 
  SignInButton,
  SignedIn,
  UserButton
 } from "@clerk/nextjs";

 import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">{/*modlal-to make it popUp (Not rediract) */}
          <Button>
            Sign In
          </Button>
        </SignInButton>

      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
