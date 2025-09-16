import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

//data array
const caseStudiesData = [
  {
    title: "E-commerce Platform Revamp",
    client: "ShopEase",
    industry: "Retail",
    downloadLink: "#",
  },
  {
    title: "Healthcare Management System",
    client: "MediCare",
    industry: "Healthcare",
    downloadLink: "#",
  },
  {
    title: "Healthcare Management System",
    client: "MediCare",
    industry: "Healthcare",
    downloadLink: "#",
  },
  {
    title: "E-commerce Platform Revamp",
    client: "ShopEase",
    industry: "Retail",
    downloadLink: "#",
  },

  {
    title: "Healthcare Management System",
    client: "MediCare",
    industry: "Healthcare",
    downloadLink: "#",
  },
];

const CaseStudies = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Case Studies
      </Typography>
      <Grid container spacing={3}>
        {caseStudiesData.map((caseStudy, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: 5 }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 2,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {caseStudy.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Client:</strong> {caseStudy.client}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  <strong>Industry:</strong> {caseStudy.industry}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={caseStudy.downloadLink}
                  target="_blank"
                  sx={{ mt: 1 }}
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseStudies;
