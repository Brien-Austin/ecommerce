import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {cookies} from 'next/headers'

export const supabaseClient = createClientComponentClient()
export const supabaseServer = createServerComponentClient({cookies})