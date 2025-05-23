import {
  Box,
  Grid,
  Chip,
  List,
  Paper,
  Avatar,
  Divider,
  ListItem,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PhoneIcon from "@mui/icons-material/Phone";
import avatar1 from "../../../assets/images/avatar-1.png";
import LocationPinIcon from "@mui/icons-material/LocationPin";

import {
  Male as MaleIcon,
  Assignment as MrnIcon,
  BarChart as ChartIcon,
  HowToReg as EnrollIcon,
  Work as OccupationIcon,
  Groups as EthnicityIcon,
} from "@mui/icons-material";

import ScreeningList from "./ScreeningList";

const PatientSubInfoCard = ({ title, children }) => (
  <Box
    sx={{
      border: "1px solid #008ED4",
      borderRadius: "8px",
      overflow: "hidden",
      textAlign: "center",
      width: 140,
      p: 0.3,
      minHeight: 95,
    }}
  >
    <Box
      sx={{
        backgroundColor: "#008ED4",
        color: "white",
        padding: "4px 0",
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
      }}
    >
      <Typography variant="subtitle2">{title}</Typography>
    </Box>
    {children}
  </Box>
);

export default function PatientInfoCard() {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, width: "80%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={10}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Avatar
              alt="Patient Avatar"
              sx={{ width: 100, height: 100 }}
              src={avatar1}
            />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="h5" color="primary">
                  Pet3011 Par3011
                </Typography>
                <IconButton size="small" color="primary">
                  <EditIcon />
                </IconButton>
                <Box>
                  <Chip
                    icon={<ChartIcon />}
                    label="Chart"
                    variant="outlined"
                    color="primary"
                    sx={{
                      mr: 1,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 2,
                      },
                      "&:active": {
                        transform: "scale(0.96)",
                      },
                    }}
                  />
                  <Chip
                    icon={<EnrollIcon />}
                    label="Enroll"
                    variant="outlined"
                    color="primary"
                    sx={{
                      cursor: "pointer",
                      transition: "all 0.2s",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 2,
                      },
                      "&:active": {
                        transform: "scale(0.96)",
                      },
                    }}
                  />
                </Box>
              </Box>

              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <MaleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <>
                        <strong>Male DOB :</strong> 01-Jan-1980 (42 Yrs)
                      </>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EthnicityIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <>
                        <strong>Ethnicity :</strong> Caucasian (European)
                      </>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <OccupationIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <>
                        <strong>Occupation :</strong> Management
                      </>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MrnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <>
                        <strong> Account # :</strong> 14251541825 🌟 MRN: - (EBS
                        Demo Facility - 35)
                      </>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Box>

          {/* patinet sub info cards */}
          <Grid container spacing={1} sx={{ mt: 2.7 }}>
            <Grid item xs={4}>
              <PatientSubInfoCard
                title="Risk"
                children={
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{ p: 0.1, mt: 1, gap: 1 }}
                  >
                    <Typography variant="caption">
                      This Year: <strong>N/A</strong>
                    </Typography>
                    <Typography variant="caption">
                      Last Year: <strong>N/A</strong>
                    </Typography>
                  </Box>
                }
              />
            </Grid>

            <Grid item xs={4}>
              <PatientSubInfoCard
                title="Care Gaps"
                children={
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 1,
                      }}
                    >
                      <Box
                        sx={{
                          border: "2px solid black",
                          borderRadius: "50%",
                          width: 40,
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        3
                      </Box>
                    </Box>
                  </>
                }
              />
            </Grid>

            <Grid item xs={4}>
              <PatientSubInfoCard
                title="ASCVD"
                children={
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{ p: 0.1, mt: 1, gap: 1 }}
                  >
                    <Typography variant="caption">
                      Current Risk: <strong>2.70</strong>
                    </Typography>
                    <Typography variant="caption">
                      Lowest Risk: <strong>0.20</strong>
                    </Typography>
                  </Box>
                }
              />
            </Grid>

            <Grid item xs={4}>
              <PatientSubInfoCard
                title="SDOH"
                children={
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{ p: 0.1, mt: 1, gap: 1 }}
                  >
                    <Typography variant="caption">
                      This Year: <strong>0.57</strong>
                    </Typography>
                    <Typography variant="caption">
                      Last Year: <strong>0.60</strong>
                    </Typography>
                  </Box>
                }
              />
            </Grid>
          </Grid>
        </Grid>

        {/* patinet right side info  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "30%",
          }}
        >
          <List dense>
            <ListItem>
              <ListItemIcon>
                <LocationPinIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={<>No details provided</>} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <strong>Primary:</strong> +91 8458416720
                    {"  "} <PhoneIcon sx={{ fontSize: 15 }} />
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <strong>Emergency:</strong> +91 9410016720
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <strong>Policy Number:</strong> 1000144575
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <strong>Insurer:</strong> Medicare
                  </>
                }
              />
            </ListItem>
          </List>

          <Divider sx={{ my: 0.2 }} />

          <Typography variant="h6">Screenings</Typography>
          <Box display="flex">
            <ScreeningList />
          </Box>
        </Box>
      </Grid>
    </Paper>
  );
}
