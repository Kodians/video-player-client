import { render, screen } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import UserProfile from "./userProfile";



describe("Render Profile form", () => {
  
    test("Should render user profil page correctly", () => {
      render(<UserProfile />);
      const userProfile = screen.getByRole("user-profile");
      expect(userProfile).toBeInTheDocument();
    });
  
    test("Should render  informationProfile card correctly", () => {
      render(<UserProfile />);
       const profileInformation = screen.getByRole("informationProfile");
      expect(profileInformation).toBeInTheDocument();
    });
  
     test("Should render ReacapProfile card correctly", () => {
        render(<UserProfile />);
        const recapProfile = screen.getByRole("recapProfile");
        expect(recapProfile).toBeInTheDocument();
     }); 
  
   test("Should render photo card correctly", () => {
      render(<UserProfile />);
      const photo = screen.getByRole("photo");
      expect(photo).toBeInTheDocument();
    }); 
  
     test("Should render label firstName input correctly", () => {
      render(<UserProfile />);
      const firstName = screen.getByRole("textbox", {
        name: /First Name/i,
      });
      expect(firstName).toBeInTheDocument();
    });
 
  test("Should render label lastname input correctly", () => {
      render(<UserProfile />);
      const lastname = screen.getByRole("textbox", {
        name: /Last Name/i,
      });
      expect(lastname).toBeInTheDocument();
    });

    test("Should render label adressMail input correctly", () => {
        render(<UserProfile />);
        const adressMail = screen.getByRole("textbox", {
          name: /Adresse email/i,
        });
        expect(adressMail).toBeInTheDocument();
      });


  });
  

   describe("Interaction Profile form", () => {
    test("Should display firstname input value correctly", async () => {
      render(<UserProfile />);
      const firstNameInput = screen.getByRole("textbox", {
        name:/First Name/i,
      });
      await userEvent.type(firstNameInput, "First name");
      expect(firstNameInput).toHaveValue("First name");
    });

    test("Should display Lastname input value correctly", async () => {
      render(<UserProfile />);
      const lastNameInput = screen.getByRole("textbox", {
        name:/Last Name/i,
      });
      await userEvent.type(lastNameInput, "Last name");
      expect(lastNameInput).toHaveValue("Last name");
    });

    test("Should display adressemail input value correctly", async () => {
      render(<UserProfile />);
      const adressmailInput = screen.getByRole("textbox", {
        name:/Adresse email/i,
      });
      await userEvent.type(adressmailInput, "Adresse mail");
      expect(adressmailInput).toHaveValue("Adresse mail");
    });

    test("Should display clique button  correctly", async () => {
      render(<UserProfile />);
      const buttonupload = screen.getByRole("button", {
        name:/Upload/i,
      });
      await userEvent.click(buttonupload);
    });

  }); 