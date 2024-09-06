import React from "react";
import { Box, Typography } from "@mui/material";
import TermsPageHeader from "../components/DisplayComponents/TermsPageHeader.js";
import { TermsFooter } from "../components/DisplayComponents/TermsFooter";

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures the box takes at least the full viewport height
        backgroundColor: "#f5f5f5",
        overflowY: "auto",
        height:300,
      }}
    >
      <TermsPageHeader />

      <Box
        sx={{
          flex: 1, // Takes up the remaining space
          padding: "40px",
          marginTop: "20px",
       // Ensures vertical scrolling if content exceeds viewport height
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ color: '#FF8C00' }}
          >
            Terms and Conditions
          </Typography>

        <Typography variant="h6" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography paragraph>
          - By using our application, you agree to comply with and be bound by these terms and conditions.
          - If you do not agree, please refrain from using the application.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Usage License
        </Typography>
        <Typography paragraph>
          - You are granted a limited, non-exclusive, non-transferable license to use the application for personal, non-commercial purposes.
          - Any unauthorized use may result in termination of your access to the application.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. User Responsibilities
        </Typography>
        <Typography paragraph>
          - You agree not to misuse the application, including but not limited to:
          <ul>
            <li>Attempting to gain unauthorized access</li>
            <li>Distributing malware</li>
            <li>Engaging in activities that violate any laws or third-party rights</li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Modification of Terms
        </Typography>
        <Typography paragraph>
          - We reserve the right to modify these terms at any time.
          - Any changes will be effective immediately upon posting.
          - Your continued use of the application constitutes acceptance of the revised terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Limitation of Liability
        </Typography>
        <Typography paragraph>
          - We are not liable for any damages arising from your use of the application, including but not limited to:
          <ul>
            <li>Loss of data</li>
            <li>Loss of profits</li>
            <li>Other intangible losses</li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Termination
        </Typography>
        <Typography paragraph>
          - We may terminate your access to the application at any time, without notice, for conduct that we believe:
          <ul>
            <li>Violates these terms</li>
            <li>Is harmful to other users of the application or us</li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Governing Law
        </Typography>
        <Typography paragraph>
          - These terms are governed by and construed in accordance with the laws of the applicable jurisdiction.
        </Typography>

        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ color: '#FF8C00' }}
        >
        Privacy Policy
        </Typography>


        <Typography variant="h6" gutterBottom>
          1. Information Collection
        </Typography>
        <Typography paragraph>
          - We collect personal information that you voluntarily provide when using our application, including but not limited to:
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Usage data</li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Use of Information
        </Typography>
        <Typography paragraph>
          - The information we collect is used to:
          <ul>
            <li>Improve our application</li>
            <li>Provide customer support</li>
            <li>Communicate with you</li>
          </ul>
          - We do not share your personal information with third parties except as required by law.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Data Security
        </Typography>
        <Typography paragraph>
          - We implement reasonable security measures to protect your personal information.
          - However, no method of transmission over the Internet or electronic storage is completely secure.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Cookies
        </Typography>
        <Typography paragraph>
          - Our application may use cookies to enhance your user experience.
          - You can choose to disable cookies in your browser settings, but this may affect your ability to use certain features of the application.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Changes to Privacy Policy
        </Typography>
        <Typography paragraph>
          - We reserve the right to update this privacy policy at any time.
          - Changes will be posted on this page.
          - Your continued use of the application signifies your acceptance of the updated policy.
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Contact Us
        </Typography>
        <Typography paragraph>
          - If you have any questions about these terms or our privacy practices, please contact us at [Your Contact Information].
        </Typography>
      </Box>
      
      <TermsFooter />
    </Box>
  );
};

export default PrivacyPolicy;
