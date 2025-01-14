'use client'

import posthog from 'posthog-js'
import {PostHogProvider as PHProvider} from 'posthog-js/react'
import {useEffect} from "react";

export function PostHogProvider({children}: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init("phc_HPTKdXtOr1eHJV1V0SBUmWpGRAgz6rCkDeT55wCKOyK", {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'identified_only'
    })
  }, [])

  return <PHProvider client={posthog}>
    {children}
  </PHProvider>

}