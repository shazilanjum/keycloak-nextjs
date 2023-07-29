import { useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/ssr';
import Keycloak from 'keycloak-js';
import { keycloakConfig } from "../components/constants/KeycloakConfig";

export function useKeycloakWrapper() {
  
      
const keycloak = new Keycloak(keycloakConfig);
      

  const { initialized, keycloakInstance } = useKeycloak({ keycloak });

  useEffect(() => {
    if (initialized) {
      keycloakInstance.init({ onLoad: 'check-sso', promiseType: 'native' });
    }
  }, [initialized, keycloakInstance]);

  return { keycloak, initialized };
}