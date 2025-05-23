import InfoCard from "./InfoCard";
import { Box, Grid } from "@mui/material";
import LatestNoteCard from "./LatestNoteCard";
import SummaryCards from "./RecentActivityCard";
import PatientInfoCard from "./PatientInfoCard";

const DashboardComponent = () => {
  const info1 = {
    "Primary Physician": "TEST ONLY",
    "Primary Location": "EBS Demo Facility - 35",
    "Referred by": "Not provided",
    "Last Visit": "15-Nov-2019",
    "No of visit (in last 12 months)": "7",
    "No of Hospitalizations (in last 3 months)": "0",
  };

  const info2 = {
    "Condition ": "Hart Failure , Hypertension, Ischemic, Heart Disease",
    "Habit ": "Smoking",
    "Referred by": "Not provided",
    "Vitals ":
      "BMI: NA, Systolic/Diastolic:127/84, Glucose: NA,O2 Saturation: NA",
  };

  const info3 = {
    "Allergy ": "Env (fungicide) , Food(egg), Food(tree nut)",
    "Medication ": "DIA-ESE",
    Immunization: "1111 (dtp)",
  };

  const info4 = {
    "Programs ": "Remote Monitoring , Disease management program, CCM",
    "Service Category ": "High Acuity, Strghit medicare",
    "Messures ":
      "Adult Access to preventive /Ambultary Health Services all, Adult BMI assessment, Controlling Hight blood pressure wiht 18-59 years of age ",
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item size={{ sm: 12, md: 9 }}>
          <PatientInfoCard />
        </Grid>

        <Grid item size={{ sm: 12, md: 3 }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            gap={1}
          >
            <SummaryCards />
            <LatestNoteCard />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1} mt={2}>
        <Grid item size={{ sm: 12, md: 6, lg: 3 }}>
          <InfoCard borderColor="#1976d2" data={info1} />
        </Grid>
        <Grid item size={{ sm: 12, md: 6, lg: 3 }}>
          <InfoCard borderColor="#53a344" data={info2} />
        </Grid>
        <Grid item size={{ sm: 12, md: 6, lg: 3 }}>
          <InfoCard borderColor="#f6950e" data={info3} />
        </Grid>
        <Grid item size={{ sm: 12, md: 6, lg: 3 }}>
          <InfoCard borderColor="#ef2d2d" data={info4} />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardComponent;
