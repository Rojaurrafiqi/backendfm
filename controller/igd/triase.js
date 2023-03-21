import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

//   get triase pasien igd
export const triase_pasien_igd = async (req, res) => {
     try {
        const response = await prisma.triase_pasien_igd.findMany({
            where: {
                id_pasien_igd: Number(req.params.id)
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 1
            
        });
        res.status(200).json(response);
    }   catch (error) {
        res.status(404).json({msg:error.message});
    }    
}

// tambah data triase pasien igd
export const add_triase_pasien_igd = async (req, res) => {

     const {            
            id_pasien_igd,
            keluhan_utama,
    } = req.body;
    try {
   
        const rm_Data = await prisma.triase_pasien_igd.create({
            data: {
                id_pasien_igd:id_pasien_igd,
                keluhan_utama:keluhan_utama,
            }
        });
        res.status(201).json(rm_Data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const Update_triase_pasien_igd = async (req, res) => {
 const {         
        keluhan_utama,       
    } = req.body;
    
    try {
        const data = await prisma.triase_pasien_igd.update({
             where: {
                id: Number(req.params.id)
            },
            data: {
                keluhan_utama:keluhan_utama,

            }
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

//   get triase tanda vital
export const triase_tanda_vital_pasien_igd = async (req, res) => {
     try {
        const response = await prisma.triase_tanda_vital_pasien_igd.findMany({
            where: {
                id_pasien_igd: Number(req.params.id)
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 1
            
        });
        res.status(200).json(response);
    }   catch (error) {
        res.status(404).json({msg:error.message});
    }    
}

// tambah data triase pasien igd
export const add_triase_tanda_vital_pasien_igd = async (req, res) => {

     const {            
            id_pasien_igd,
            tekanan_darah,         
            frekuensi_nadi,        
            frekuensi_nafas,        
            suhu,                  
            sat_o2,                 
            riwayat_alergi_makanan,
            riwayat_alergi_obat,    
            riwayat_alergi_lainya,  
            berat_badan,            
            tinggi_badan,          
    } = req.body;
    try {
   
        const rm_Data = await prisma.triase_tanda_vital_pasien_igd.create({
            data: {
                id_pasien_igd:id_pasien_igd,
                tekanan_darah:tekanan_darah,         
                frekuensi_nadi:frekuensi_nadi,        
                frekuensi_nafas:frekuensi_nafas,        
                suhu:suhu,                  
                sat_o2:sat_o2,                 
                riwayat_alergi_makanan:riwayat_alergi_makanan,
                riwayat_alergi_obat:riwayat_alergi_obat,    
                riwayat_alergi_lainya:riwayat_alergi_lainya,  
                berat_badan:berat_badan,            
                tinggi_badan:tinggi_badan,  
            }
        });
        res.status(201).json(rm_Data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const update_triase_tanda_vital_pasien_igd = async (req, res) => {
 const {         
            id_pasien_igd,
            tekanan_darah,         
            frekuensi_nadi,        
            frekuensi_nafas,        
            suhu,                  
            sat_o2,                 
            riwayat_alergi_makanan,
            riwayat_alergi_obat,    
            riwayat_alergi_lainya,  
            berat_badan,            
            tinggi_badan,          
      
    } = req.body;
    
    try {
        const data = await prisma.triase_tanda_vital_pasien_igd.update({
             where: {
                id: Number(req.params.id)
            },
            data: {
                id_pasien_igd:id_pasien_igd,
                tekanan_darah:tekanan_darah,         
                frekuensi_nadi:frekuensi_nadi,        
                frekuensi_nafas:frekuensi_nafas,        
                suhu:suhu,                  
                sat_o2:sat_o2,                 
                riwayat_alergi_makanan:riwayat_alergi_makanan,
                riwayat_alergi_obat:riwayat_alergi_obat,    
                riwayat_alergi_lainya:riwayat_alergi_lainya,  
                berat_badan:berat_badan,            
                tinggi_badan:tinggi_badan,  


            }
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

