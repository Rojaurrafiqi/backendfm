import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


export const getData = async (req, res) => {
    try {
        const response = await prisma.rekam_medis_pasien.findMany({
        select: {
            id: true,
            no_rm: true,
            no_kitas:true,
            nama_lengkap: true,
            kelamin: true,
            tanggal_lahir: true,
            tempat_lahir: true,
        },
    });
        res.status(200).json(response);
    }   catch (error) {
        res.status(500).json({msg:error.message});
    }
}

export const searchData = async (req, res) => {
   const { query } = req.query
  const response = await prisma.rekam_medis_pasien.findMany({
    where: {
      OR: [
        { no_rm: parseInt(query) },
        { kitas: { contains: query } },
        {nama_lengkap: { contains: query }}
        ]
    },
      select: {
            id: true,
            no_rm: true,
            no_kitas:true,
            kelamin: true,
            tanggal_lahir: true,
            tempat_lahir: true,
        },
  })
  res.status(200).json(response)

}
export const getDataById = async (req, res) => {
    try {
        const response = await prisma.rekam_medis_pasien.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    }   catch (error) {
        res.status(404).json({msg:error.message});
    }    
}

export const createData = async (req, res) => {
const lastRm = await prisma.rekam_medis_pasien.findFirst({
  select: {
    no_rm: true,
  },
  orderBy: {
    no_rm: 'desc',
  }
});



const newRm =  lastRm ? lastRm.no_rm + 1 : 1;

    

     const {            
            kitas,                  
            no_kitas,               
            nama_lengkap,           
            tempat_lahir,
            kontak_pasien,           
            tanggal_lahir,          
            kelamin,                
            golongan_darah,         
            agama,                  
            status_kawin,           
            pendidikan,             
            pekerjaan,              
            alamat_pasien_provinsi, 
            alamat_pasien_kota,     
            alamat_pasien_kec,      
            alamat_pasien_desa,      
            alamat_pasien_detail,      
            nama_penanggungjawab,   
            kontak_pj,              
            alamat_pj_provinsi,     
            alamat_pj_kota,         
            alamat_pj_kec,          
            alamat_pj_desa,         
            alamat_pj_detail,       
    } = req.body;
    try {
   
      
        const rm_Data = await prisma.rekam_medis_pasien.create({
            data: {
                no_rm: newRm,
                kitas: kitas,
                no_kitas:no_kitas,
                nama_lengkap:nama_lengkap,
                tempat_lahir:tempat_lahir,
                tanggal_lahir:tanggal_lahir,
                kontak_pasien: kontak_pasien,
                kelamin:kelamin,
                golongan_darah:golongan_darah,
                agama:agama,
                status_kawin:status_kawin,
                pendidikan:pendidikan,
                pekerjaan:pekerjaan,
                alamat_pasien_provinsi:alamat_pasien_provinsi,
                alamat_pasien_kota:alamat_pasien_kota,
                alamat_pasien_kec:alamat_pasien_kec,
                alamat_pasien_desa:alamat_pasien_desa,
                alamat_pasien_detail:alamat_pasien_detail,
                nama_penanggungjawab:nama_penanggungjawab,
                kontak_pj:kontak_pj,
                alamat_pj_provinsi:alamat_pj_provinsi,
                alamat_pj_kota:alamat_pj_kota,
                alamat_pj_kec:alamat_pj_kec,
                alamat_pj_desa:alamat_pj_desa,
                alamat_pj_detail:alamat_pj_detail,
            }
        });
        res.status(201).json(rm_Data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateData = async (req, res) => {
 const {
            no_rm,
            kitas,                  
            no_kitas,               
            nama_lengkap,           
            tempat_lahir,
            kontak_pasien,           
            tanggal_lahir,          
            kelamin,                
            golongan_darah,         
            agama,                  
            status_kawin,           
            pendidikan,             
            pekerjaan,              
            alamat_pasien_provinsi, 
            alamat_pasien_kota,     
            alamat_pasien_kec,      
            alamat_pasien_desa,      
            alamat_pasien_detail,      
            nama_penanggungjawab,   
            kontak_pj,              
            alamat_pj_provinsi,     
            alamat_pj_kota,         
            alamat_pj_kec,          
            alamat_pj_desa,         
            alamat_pj_detail,       
    } = req.body;
    
    try {
        const rm_Data = await prisma.rekam_medis_pasien.update({
             where: {
                id: Number(req.params.id)
            },
            data: {
                no_rm: no_rm,
                kitas: kitas,
                no_kitas:no_kitas,
                nama_lengkap:nama_lengkap,
                tempat_lahir:tempat_lahir,
                tanggal_lahir:tanggal_lahir,
                kelamin:kelamin,
                golongan_darah:golongan_darah,
                agama:agama,
                status_kawin:status_kawin,
                pendidikan:pendidikan,
                pekerjaan:pekerjaan,
                alamat_pasien_provinsi:alamat_pasien_provinsi,
                alamat_pasien_kota:alamat_pasien_kota,
                alamat_pasien_kec:alamat_pasien_kec,
                alamat_pasien_desa:alamat_pasien_desa,
                alamat_pasien_detail:alamat_pasien_detail,
                nama_penanggungjawab:nama_penanggungjawab,
                kontak_pj:kontak_pj,
                alamat_pj_provinsi:alamat_pj_provinsi,
                alamat_pj_kota:alamat_pj_kota,
                alamat_pj_kec:alamat_pj_kec,
                alamat_pj_desa:alamat_pj_desa,
                alamat_pj_detail:alamat_pj_detail,

            }
        });
        res.status(200).json(rm_Data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteData = async(req, res) => {
 const {no_rm, kitas} = req.body;
    try {
        const rm_Data = await prisma.rekam_medis_pasien.delete({
             where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(rm_Data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const listPekerjaan = async (req, res) => {
try {
    const data_pekerjaan = await prisma.pekerjaan.findMany();
    res.status(200).json(data_pekerjaan)
} catch (error) {
    res.status(500).json({msg: error.message});
}
}

// create data tambah list tindakan
export const createPekerjaan = async (req, res) => {
    const {            
            nama_pekerjaan,
    } = req.body;
    
    try {
        const data_tindakan = await prisma.pekerjaan.create({
            data: {
               nama_pekerjaan:nama_pekerjaan
            }
        });
        res.status(201).json(data_tindakan);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

// agama

export const listAgama = async (req, res) => {
try {
    const data = await prisma.agama.findMany();
    res.status(200).json(data)
} catch (error) {
    res.status(500).json({msg: error.message});
}
}

// create data tambah list tindakan
export const createListAgama = async (req, res) => {
    const {            
            list_agama,
    } = req.body;
    
    try {
        const data = await prisma.agama.create({
            data: {
               list_agama:list_agama
            }
        });
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

// status kawin
export const listStatusKawin = async (req, res) => {
try {
    const data = await prisma.status_kawin.findMany();
    res.status(200).json(data)
} catch (error) {
    res.status(500).json({msg: error.message});
}
}

// create data tambah list tindakan
export const createListStatusKawin = async (req, res) => {
    const {            
            list_status_kawin,
    } = req.body;
    
    try {
        const data = await prisma.status_kawin.create({
            data: {
               list_status_kawin:list_status_kawin
            }
        });
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

// pendidikan
export const listPendidikan = async (req, res) => {
try {
    const data = await prisma.pendidikan.findMany();
    res.status(200).json(data)
} catch (error) {
    res.status(500).json({msg: error.message});
}
}

// create data tambah list tindakan
export const createListPendidikan = async (req, res) => {
    const {            
            list_pendidikan,
    } = req.body;
    
    try {
        const data = await prisma.pendidikan.create({
            data: {
               list_pendidikan:list_pendidikan
            }
        });
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
// golongan darah
export const listGolonganDarah = async (req, res) => {
try {
    const data = await prisma.golongan_darah.findMany();
    res.status(200).json(data)
} catch (error) {
    res.status(500).json({msg: error.message});
}
}

// create data tambah list tindakan
export const createListGolonganDarah = async (req, res) => {
    const {            
            list_golongan_darah,
    } = req.body;
    
    try {
        const data = await prisma.golongan_darah.create({
            data: {
               list_golongan_darah:list_golongan_darah
            }
        });
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
